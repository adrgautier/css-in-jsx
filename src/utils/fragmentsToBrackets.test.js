import React from "react";
import fragmentsToBrackets from "./fragmentsToBrackets";

describe("fragmentsToBrackets", () => {
  it("should match snapshot", () => {
    // GIVEN
    const styleAsFragments = (
      <>
        color: black; .active<>color: red;</>
      </>
    );

    // WHEN
    const styleAsBrackets = fragmentsToBrackets(styleAsFragments);

    // THEN
    expect(styleAsBrackets).toMatchSnapshot();
  });
});
