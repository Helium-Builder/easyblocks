import { ReactElement } from "react";

type SimpleBannerProps = {
  Root: ReactElement;
  Title: ReactElement;
  Wrapper: ReactElement;
  Buttons: ReactElement[];
  ButtonsWrapper: ReactElement;
  Stack: ReactElement;
};

export function SimpleBanner(props: SimpleBannerProps) {
  const { Root, Title, Wrapper, Buttons, ButtonsWrapper, Stack } = props;

  console.log("SimpleBanner", props);

  return (
    <Root.type {...Root.props}>
      <Wrapper.type {...Wrapper.props}>
        <Title.type {...Title.props} />
        <ButtonsWrapper.type {...ButtonsWrapper.props}>
          {Buttons.map((Button, index) => (
            <Button.type {...Button.props} key={index} />
          ))}
        </ButtonsWrapper.type>
        <Stack.type {...Stack.props} />
      </Wrapper.type>
    </Root.type>
  );
}
