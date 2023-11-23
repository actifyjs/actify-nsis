import { useMemo } from "react";
import { Button, Icon, Spacer } from "actify";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();

  const prevPage = useMemo(() => {
    const pageNumber = pathname.slice(5);
    if (pathname == "/") {
    }
    if (pageNumber == 1) {
      return "/";
    } else {
      return `/page${parseInt(pageNumber) - 1}`;
    }
  }, [pathname]);

  const nextPage = useMemo(() => {
    const pageNumber = pathname.slice(5);
    if (pathname == "/") {
      return "/page1";
    } else if (pageNumber == 3) {
      return "/finish";
    } else {
      return `/page${parseInt(pageNumber) + 1}`;
    }
  }, [pathname]);

  return (
    <footer className="h-14 px-2 shadow-inner flex items-center justify-between">
      {pathname != "/" ||
        (pathname != "/finish" && (
          <Link to={prevPage}>
            <Button color="error">
              <Icon name="arrow-left" />
              上一步{prevPage}
            </Button>
          </Link>
        ))}
      <Spacer />
      {pathname == "/finish" ? (
        <Button>
          完成
          <Icon name="check" />
        </Button>
      ) : (
        <Link to={nextPage}>
          <Button>
            下一步{nextPage}
            <Icon name="arrow-right" />
          </Button>
        </Link>
      )}
    </footer>
  );
}
