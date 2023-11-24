# DO NOT EDIT - Generated automatically by `wails build`

!include "x64.nsh"
!include "WinVer.nsh"
!include "FileFunc.nsh"

!ifndef INFO_PROJECTNAME
    !define INFO_PROJECTNAME "actify-wails"
!endif
!ifndef INFO_COMPANYNAME
    !define INFO_COMPANYNAME "Actify"
!endif
!ifndef INFO_PRODUCTNAME
    !define INFO_PRODUCTNAME "Wails with Actify"
!endif
!ifndef INFO_PRODUCTVERSION
    !define INFO_PRODUCTVERSION "1.0.0"
!endif
!ifndef INFO_COPYRIGHT
    !define INFO_COPYRIGHT "Copyright © 2023"
!endif
!ifndef PRODUCT_EXECUTABLE
    !define PRODUCT_EXECUTABLE "${INFO_PROJECTNAME}.exe"
!endif
!ifndef UNINST_KEY_NAME
    !define UNINST_KEY_NAME "${INFO_COMPANYNAME}${INFO_PRODUCTNAME}"
!endif
!define UNINST_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINST_KEY_NAME}"

!ifndef REQUEST_EXECUTION_LEVEL
    !define REQUEST_EXECUTION_LEVEL "admin"
!endif

RequestExecutionLevel "${REQUEST_EXECUTION_LEVEL}"