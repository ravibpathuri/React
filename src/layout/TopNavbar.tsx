import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useStyletron } from "baseui";
import { Layer } from "baseui/layer";
import { AppNavBar, setItemActive, NavItemT } from "baseui/app-nav-bar";

import menuData, { userItems } from "./__mocks__/MenuData";

export default function TopNavbar() {
  const [css] = useStyletron();
  const [mainItems, setMainItems] = React.useState<NavItemT[]>(menuData);
  let navigate = useNavigate();

  function handleMainItemSelect(item: any) {
    setMainItems((prev) => setItemActive(prev, item));
    console.log(item.path);

    if (item.path) navigate(item.path);
  }
  return (
    <Layer>
      <div
        className={css({
          boxSizing: "border-box",
          width: "100vw",
          position: "fixed",
          top: "0",
          left: "0",
        })}
      >
        <AppNavBar
          title="React 2022"
          mainItems={mainItems}
          userItems={userItems}
          onMainItemSelect={handleMainItemSelect}
          onUserItemSelect={(item) => console.log("user", item)}
          username="Ravi Babu Pathuri"
          usernameSubtitle="13 Years"
          userImgUrl=""
        />
      </div>
    </Layer>
  );
}
