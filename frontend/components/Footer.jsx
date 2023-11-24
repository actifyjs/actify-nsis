export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 bg-white h-10">
      <div className="h-full flex items-center justify-center font-semibold">
        Copyright &nbsp;{" "}
        <a
          target="_blank"
          className="text-error underline"
          href="https://lerte.com"
        >
          程序员Lerte
        </a>{" "}
        &nbsp; © &nbsp;
        {new Date().getFullYear()}, All Rights Reserved.
      </div>
    </footer>
  );
}
