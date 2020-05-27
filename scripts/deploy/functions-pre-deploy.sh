cp package.json "$OUTPUT_PATH"

cd "$OUTPUT_PATH"

# Generate a firebase.json which said Cloud Function source is the current folder
echo '{"functions":{"source":"."}}' >firebase.json
