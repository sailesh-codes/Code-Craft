@echo off
echo Cleaning and preparing for deployment...

REM Remove problematic directories
if exist CodeCraftSite rmdir /s /q CodeCraftSite
if exist node_modules rmdir /s /q node_modules
if exist dist rmdir /s /q dist

REM Use clean package.json
copy package-clean.json package.json

echo Installing dependencies...
npm install

echo Building project...
npm run build

echo Copying static files...
xcopy /E /Y dist\* .

echo Deploying to Vercel...
vercel --prod

echo Deployment complete!
pause