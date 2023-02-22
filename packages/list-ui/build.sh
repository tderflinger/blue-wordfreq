echo "Building list-ui"
rm -rf ./.next
rm -rf ./out
npm run build
npm run export
