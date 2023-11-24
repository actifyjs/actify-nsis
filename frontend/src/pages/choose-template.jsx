import Layout from "@/components/Layout";
import template1 from "@/src/assets/images/template1.png";
import { Button } from "actify";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  // 跳转到模板页面
  const handleClick = () => {
    navigate("/template", { state: { template: 1 } });
  };

  return (
    <Layout>
      <p className="sticky top-4">
        <Button>请选择一个模板</Button>
      </p>
      <div className="py-4 columns-1 gap-2 space-y-2">
        <img
          src={template1}
          alt="template1"
          onClick={handleClick}
          className="w-full object-cover border-2 rounded-lg p-2 hover:border-primary shadow-2xl"
        />
      </div>
    </Layout>
  );
}
