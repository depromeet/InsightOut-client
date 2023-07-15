CHROMATIC_TOKEN=$(grep CHROMATIC_TOKEN .env | cut -d "=" -f2)
npx chromatic --project-token=$CHROMATIC_TOKEN --exit-once-uploaded --allow-console-errors