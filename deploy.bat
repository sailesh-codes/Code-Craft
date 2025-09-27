@echo off
echo Building project...
npm run build

echo Copying static files...
xcopy /E /Y dist\public\* .

echo Deploying to Vercel...
vercel --prod

echo Deployment complete!
pause
