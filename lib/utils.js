import { createCn } from "cn/config"

export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "title",
            "heading",
            "subhead",
            "lead",
            "body",
            "meta",
          ],
        },
      ],
    },
  },
})
