package main

import (
	"context"
	"os"
	"os/exec"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) Minimize() {
	runtime.WindowMinimise(a.ctx)
}

func (a *App) Maximize() {
	if runtime.WindowIsMaximised(a.ctx) {
		runtime.WindowUnmaximise(a.ctx)
	} else{
		runtime.WindowMaximise(a.ctx)
	}
}

func (a *App) Quit() {
	runtime.Quit(a.ctx)
}


func (a *App) ChooseFolder() (string, error) {
	folder,_  :=  runtime.OpenDirectoryDialog(a.ctx, runtime.OpenDialogOptions{
		Title: "Choose a folder",
	})
	return folder,nil
}

func writeToFile(fileName string, data string) error {
	f, err := os.Create(fileName)
	if err != nil {
		return err
	}
	defer f.Close()
	_, err = f.WriteString(data)
	if err != nil {
		return err
	}
	return nil
}

func (a *App) Nsis(nsh string) string {
	writeToFile("./nsis/install.nsh", nsh)
	// Path to your NSIS compiler (makensis.exe)
	nsisCompiler := "./nsis/makensis.exe"

	// Path to your NSIS script file
	nsisScript := "./nsis/install.nsi"
	cmd := exec.Command(nsisCompiler, nsisScript)


	// Redirect standard output and standard error
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	// Run the command
	err := cmd.Run()
	if err != nil {
		return "Error running NSIS compiler:" + err.Error()
	}
	return "NSIS compiler finished successfully"
}