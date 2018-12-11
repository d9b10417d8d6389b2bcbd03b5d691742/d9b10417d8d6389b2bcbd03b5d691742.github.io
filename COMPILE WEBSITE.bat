for /r %~dp0 %%i in (*.html) do powershell -command "\"$(Get-Content %%i)\" > %%i.compilertmp " & set nm=%%i & del %%i
for /r %~dp0 %%i in (*.css) do powershell -command "\"$(Get-Content %%i)\" > %%i.compilertmp " & set nm=%%i & del %%i
for /r %~dp0 %%i in (*.js) do powershell -command "\"$(Get-Content %%i)\" > %%i.compilertmp " & set nm=%%i & del %%i

for /R %~dp0 %%f in (*.compilertmp) do rename %%f %%~nf
