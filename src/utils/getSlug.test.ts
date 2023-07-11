import { expect, describe, it } from "vitest";
import { getSlug } from "./getSlug";

describe("getSlug()", () => {
  it.each([
    {
      input: `Dostępność w kilku".,/ krokach         ~ @ # $ % ^co * ( & ) _ + = - * /`,
      output: "dostepnosc-w-kilku-krokach-co-and",
    },
    {
      input: "cammelCase",
      output: "cammelcase",
    },
    {
      input: "Źdźbło jaźń żąkile ",
      output: "zdzblo-jazn-zakile",
    },
  ])(`arrayFromRange($input, $output) return $output`, ({ input, output }) => {
    expect(getSlug(input)).toEqual(output);
  });
});
