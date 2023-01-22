package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"os"
)

type SingleWord struct {
	Word        string `json:"word"`
	Translation string `json:"en-us"`
}

type WordList []SingleWord

func main() {
	fmt.Printf("Converter\n")
	fmt.Printf("Convert a JSON frequency wordlist into HTML.\n")

	argLength := len(os.Args[1:])
	if argLength == 0 {
		log.Fatal("Please specify a language.")
	}

	lang := os.Args[1]
	langName := os.Args[2]

	content, err := ioutil.ReadFile("../word-lists/" + lang + "-list.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	var payload WordList
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
	}

	t, err := template.ParseFiles("./freq-list.gohtml")
	if err != nil {
		panic(err)
	}

	data := struct {
		LanguageName string
		LanguageCode string
		Payload      WordList
	}{}

	data.Payload = payload
	data.LanguageName = langName
	data.LanguageCode = lang

	f, err := os.Create("../dist/freq-list-" + lang + ".html")
	if err != nil {
		panic(err)
	}
	err = t.Execute(f, data)
	if err != nil {
		panic(err)
	}
}
