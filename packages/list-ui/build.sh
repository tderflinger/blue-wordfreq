echo "Building list-ui"
rm -rf ./.next
rm -rf ./out
npm run build
npm run export
cd out
cp cs.html index.html
cd ..
