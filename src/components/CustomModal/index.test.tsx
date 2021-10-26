import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { CustomModal } from ".";

it("should be able to render CustomModal and cancel action", async () => {
  let show = false;

  function setShow(value: boolean) {
    show = value;
  }
  function onCancel() {
    show = false;
  }
  function onConfirm() {
    show = false;
  }

  const { getByTestId } = await render(
    <CustomModal
      setShow={setShow}
      show={show}
      text="Modal test"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );

  await fireEvent(getByTestId("actionCancel"), "onPress");
});

it("should be able to render CustomModal and confirm action", async () => {
  let show = false;

  function setShow(value: boolean) {
    show = value;
  }
  function onCancel() {
    show = false;
  }
  function onConfirm() {
    show = false;
  }

  const { getByTestId } = await render(
    <CustomModal
      setShow={setShow}
      show={show}
      text="Modal test"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );

  await fireEvent(getByTestId("actionConfirm"), "onPress");
});
