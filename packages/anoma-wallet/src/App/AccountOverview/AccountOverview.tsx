import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useNavigate } from "react-router-dom";

import { NavigationContainer } from "components/NavigationContainer";
import { Heading, HeadingLevel } from "components/Heading";
import { AccountOverviewContainer } from "./AccountOverview.components";
import { useAppSelector, store } from "store";
import { DerivedAccounts } from "./DerivedAccounts";
import { Button, ButtonVariant } from "components/Button";

const persistor = persistStore(store);

export const AccountOverview = (): JSX.Element => {
  const { derived } = useAppSelector((state) => state.accounts);
  const navigate = useNavigate();

  return (
    <AccountOverviewContainer>
      <NavigationContainer>
        <Heading level={HeadingLevel.One}>AccountOverview</Heading>
      </NavigationContainer>
      <a
        // eslint-disable-next-line max-len
        href="https://github.com/anoma/spec/blob/master/src/architecture/namada/web-wallet/user-interfaces.md#accountoverview-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        AccountOverview
      </a>
      <Button
        variant={ButtonVariant.Contained}
        onClick={() => navigate("/wallet/add-account")}
      >
        Add Account
      </Button>
      <PersistGate loading={null} persistor={persistor}>
        <DerivedAccounts derived={derived} />
      </PersistGate>
    </AccountOverviewContainer>
  );
};
