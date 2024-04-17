# DO NOT EDIT - Generated automatically by program

!include "x64.nsh"
!include "WinVer.nsh"
!include "FileFunc.nsh"

!ifndef INFO_INSTDIR
  !define INFO_INSTDIR "C:\Users\Administrator\Desktop\zroker\*.*"
!endif

!ifndef INFO_PROJECTNAME
  !define INFO_PROJECTNAME "啊撒旦风口浪尖啊"
!endif
!ifndef INFO_COMPANYNAME
  !define INFO_COMPANYNAME "啊撒旦风口浪尖啊"
!endif
!ifndef INFO_PRODUCTNAME
  !define INFO_PRODUCTNAME "十大风口浪尖阿桑的歌"
!endif
!ifndef INFO_PRODUCTVERSION
  !define INFO_PRODUCTVERSION "1.2.4"
!endif
!ifndef INFO_COPYRIGHT
  !define INFO_COPYRIGHT "阿斯顿发射点"
!endif
!ifndef PRODUCT_EXECUTABLE
  !define PRODUCT_EXECUTABLE "${INFO_PROJECTNAME}.exe"
!endif
!ifndef UNINST_KEY_NAME
  !define UNINST_KEY_NAME "${INFO_COMPANYNAME}${INFO_PRODUCTNAME}"
!endif
!define UNINST_KEY "SoftwareMicrosoftWindowsCurrentVersionUninstall${UNINST_KEY_NAME}"

!ifndef REQUEST_EXECUTION_LEVEL
  !define REQUEST_EXECUTION_LEVEL "admin"
!endif

RequestExecutionLevel "${REQUEST_EXECUTION_LEVEL}"
