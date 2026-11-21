"use client";

import { useEffect } from "react";

const EDITABLE_SELECTOR =
  'input, textarea, select, [contenteditable="true"], [role="textbox"]';

function isEditableTarget(target) {
  return target instanceof Element && Boolean(target.closest(EDITABLE_SELECTOR));
}

export default function ContentCopyProtection() {
  useEffect(() => {
    const preventPageCopy = (event) => {
      if (!isEditableTarget(event.target)) event.preventDefault();
    };

    const preventPageSelection = (event) => {
      if (!isEditableTarget(event.target)) event.preventDefault();
    };

    const preventPageContextMenu = (event) => {
      if (!isEditableTarget(event.target)) event.preventDefault();
    };

    document.addEventListener("copy", preventPageCopy);
    document.addEventListener("cut", preventPageCopy);
    document.addEventListener("selectstart", preventPageSelection);
    document.addEventListener("contextmenu", preventPageContextMenu);

    return () => {
      document.removeEventListener("copy", preventPageCopy);
      document.removeEventListener("cut", preventPageCopy);
      document.removeEventListener("selectstart", preventPageSelection);
      document.removeEventListener("contextmenu", preventPageContextMenu);
    };
  }, []);

  return null;
}
