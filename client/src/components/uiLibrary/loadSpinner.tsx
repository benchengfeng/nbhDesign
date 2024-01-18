import { Alert, Spin } from "antd";
import React from 'react';


const LoadSpinner = () => {
  return (
    <div>
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </div>
  );
};
export { LoadSpinner }