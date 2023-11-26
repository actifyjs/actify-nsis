import { useState } from "react";
import Layout from "@/components/Layout";
import { TextField, Button, Icon } from "actify";

import { Nsis, ChooseFolder } from "@/wailsjs/go/main/App";

export default function Start() {
  const [workspace, setWorkspace] = useState("");

  const handleClick = async () => {
    const folder = await ChooseFolder();
    setWorkspace(folder);
  };

  const nsis = () => {
    Nsis();
  };

  return (
    <Layout>
      <div className="w-full max-w-7xl flex flex-col gap-4">
        <TextField label="公司名称">
          <TextField.LeadingIcon>
            <Icon name="building" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField label="应用名称">
          <TextField.LeadingIcon>
            <Icon name="app-window" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField label="版本号">
          <TextField.LeadingIcon>
            <Icon name="alert-circle" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField label="版权信息">
          <TextField.LeadingIcon>
            <Icon name="copyright" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField label="备注">
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
