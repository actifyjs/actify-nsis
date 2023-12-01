import { useState } from "react";
import Layout from "@/components/Layout";
import { TextField, Button, Icon } from "actify";

import { Nsis, ChooseFolder } from "@/wailsjs/go/main/App";

export default function Start() {
  const [workspace, setWorkspace] = useState("");
  // set information for nsis
  const [companyName, setCompanyName] = useState("");
  const [productName, setProductName] = useState("");
  const [productVersion, setProductVersion] = useState("");
  const [legalCopyright, setLegalCopyright] = useState("");
  const [fileDescription, setFileDescription] = useState("");

  const handleClick = async () => {
    const folder = await ChooseFolder();
    setWorkspace(folder);
  };

  const nsis = () => {
    const nsh = `# DO NOT EDIT - Generated automatically by program

!include "x64.nsh"
!include "WinVer.nsh"
!include "FileFunc.nsh"

!ifndef INFO_INSTDIR
  !define INFO_INSTDIR "${workspace}\\*.*"
!endif

!ifndef INFO_PROJECTNAME
  !define INFO_PROJECTNAME "${companyName}"
!endif
!ifndef INFO_COMPANYNAME
  !define INFO_COMPANYNAME "${companyName}"
!endif
!ifndef INFO_PRODUCTNAME
  !define INFO_PRODUCTNAME "${productName}"
!endif
!ifndef INFO_PRODUCTVERSION
  !define INFO_PRODUCTVERSION "${productVersion}"
!endif
!ifndef INFO_COPYRIGHT
  !define INFO_COPYRIGHT "${legalCopyright}"
!endif
!ifndef PRODUCT_EXECUTABLE
  !define PRODUCT_EXECUTABLE "\${INFO_PROJECTNAME}.exe"
!endif
!ifndef UNINST_KEY_NAME
  !define UNINST_KEY_NAME "\${INFO_COMPANYNAME}\${INFO_PRODUCTNAME}"
!endif
!define UNINST_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINST_KEY_NAME}"

!ifndef REQUEST_EXECUTION_LEVEL
  !define REQUEST_EXECUTION_LEVEL "admin"
!endif

RequestExecutionLevel "\${REQUEST_EXECUTION_LEVEL}"
`;
    Nsis(nsh);
  };

  return (
    <Layout>
      <div className="w-full max-w-7xl flex flex-col gap-4">
        <TextField
          label="公司名称"
          value={companyName}
          onChange={(_) => setCompanyName(_)}
        >
          <TextField.LeadingIcon>
            <Icon name="building" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField
          label="应用名称"
          value={productName}
          onChange={(_) => setProductName(_)}
        >
          <TextField.LeadingIcon>
            <Icon name="app-window" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField
          label="版本号"
          value={productVersion}
          onChange={(_) => setProductVersion(_)}
        >
          <TextField.LeadingIcon>
            <Icon name="alert-circle" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField
          label="版权信息"
          value={legalCopyright}
          onChange={(_) => setLegalCopyright(_)}
        >
          <TextField.LeadingIcon>
            <Icon name="copyright" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField
          type="textarea"
          label="文件描述"
          value={fileDescription}
          onChange={(_) => setFileDescription(_)}
        >
          <TextField.LeadingIcon>
            <Icon name="bookmark" />
          </TextField.LeadingIcon>
        </TextField>

        <TextField
          label="需要打包的目录"
          value={workspace}
          onClick={handleClick}
          onChange={(_) => setWorkspace(_)}
        >
          <TextField.LeadingIcon>
            <Icon name="folder" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField label="生成安装文件的目录(可选)">
          <TextField.LeadingIcon>
            <Icon name="folder" />
          </TextField.LeadingIcon>
        </TextField>

        <Button
          onClick={nsis}
          className="h-14 rounded-l-none rounded-r"
        >
          开始打包
        </Button>
      </div>
    </Layout>
  );
}
