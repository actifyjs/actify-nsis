import { Button, Icon } from "actify";
import { useState, useMemo } from "react";
import Layout from "@/components/Layout";

import { Nsis, ChooseFolder } from "./../../wailsjs/go/main/App";

export default function Start() {
  const [workspace, setWorkspace] = useState("");

  const isValidFolderPath = (path) => {
    const folderPathPattern =
      /^[a-zA-Z]:\\(?:[a-zA-Z0-9_-]+\\)*[a-zA-Z0-9_-]+$/;
    return folderPathPattern.test(path);
  };

  const handleClick = async () => {
    const folder = await ChooseFolder();
    setWorkspace(folder);
  };

  const nsis = () => {
    Nsis();
  };

  const isValidWorkspace = useMemo(
    () => isValidFolderPath(workspace),
    [workspace]
  );

  return (
    <Layout>
      <div className="flex w-full max-w-7xl">
        <div
          className="relative grow"
          onClick={handleClick}
        >
          <Icon
            name="folder"
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            value={workspace}
            className="border h-14 pl-10 w-full"
          />
        </div>
        <Button
          onClick={handleClick}
          className="h-14 rounded-l-none rounded-r"
        >
          选择一个文件夹
        </Button>
      </div>
      {isValidWorkspace && (
        <Button
          variant="outlined"
          onClick={nsis}
          className="w-full max-w-7xl rounded-lg"
        >
          下一步
        </Button>
      )}
    </Layout>
  );
}
