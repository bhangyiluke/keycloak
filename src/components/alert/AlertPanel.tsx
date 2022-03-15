import React from "react";
import {
  AlertGroup,
  Alert,
  AlertActionCloseButton,
  AlertVariant,
} from "@patternfly/react-core";

export type AlertType = {
  key: string;
  message: string;
  variant: AlertVariant;
  description?: string;
};

type AlertPanelProps = {
  alerts: AlertType[];
  onCloseAlert: (key: string) => void;
};

export function AlertPanel({ alerts, onCloseAlert }: AlertPanelProps) {
  return (
    <AlertGroup isToast>
      {alerts.map(({ key, variant, message, description }) => (
        <Alert
          key={key}
          isLiveRegion
          variant={AlertVariant[variant]}
          variantLabel=""
          title={message}
          actionClose={
            <AlertActionCloseButton
              title={message}
              onClose={() => onCloseAlert(key)}
            />
          }
        >
          {description && <p>{description}</p>}
        </Alert>
      ))}
    </AlertGroup>
  );
}
