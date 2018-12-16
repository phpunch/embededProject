import React from "react";
import { Header, Icon } from "semantic-ui-react";

const header = () => {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="wifi" circular />
        <Header.Content>Smart Clean Air</Header.Content>
      </Header>
      {/* <Image
        centered
        size="small"
        src="https://image.flaticon.com/icons/svg/112/112516.svg"
      /> */}
    </div>
  );
};

export default header;
