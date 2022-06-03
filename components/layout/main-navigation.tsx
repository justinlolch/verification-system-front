import Link from "next/link";
import Logo from "./logo";
import classes from "../../styles/main-navigation.module.css";
import { Fragment, useState } from "react";

export default function MainNavigation() {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <header className={classes.header}>
      {/* Link will not render an anchor tag by default, but just plain text. => add anchor tag */}
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          {login ? (
            <Fragment>
              <li>
                <Link href="/posts">Posts</Link>
              </li>
              <li>
                <Link href="/contact">Contacts</Link>
              </li>
            </Fragment>
          ) : (
            <li>
                <a>Connect Wallet</a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
