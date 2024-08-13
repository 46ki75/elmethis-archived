import { InlineComponent } from 'json-component-spec'

export const bold: InlineComponent[] = [
  {
    component: 'text',
    inline: true,
    text: {
      content: '正 5/2 角形は',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: '星形の図形',
      annotations: {
        bold: true,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: 'である。',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  }
]

export const colored: InlineComponent[] = [
  {
    component: 'text',
    inline: true,
    text: {
      content:
        'JavaScript の サーバーランタイムとして用いられる Node.js の代替に ',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: 'Deno',
      annotations: {
        bold: true,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'green' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: ' や ',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: 'Bun',
      annotations: {
        bold: true,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'blue', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: ' などがある。',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  }
]

export const code: InlineComponent[] = [
  {
    component: 'text',
    inline: true,
    text: {
      content: 'コンテナ仮想化は、',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: 'Linux カーネル',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: true
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: 'を共有する仮想化方式である。リソースの分離に ',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: 'namespace',
      annotations: {
        bold: false,
        code: true,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: ' を使用し、リソースの制限に ',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: 'cgroups',
      annotations: {
        bold: false,
        code: true,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: ' を使用する。また、',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: 'UnionFS',
      annotations: {
        bold: true,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'green', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: ' で同一のレイヤを共有する。',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  }
]

export const italic: InlineComponent[] = [
  {
    component: 'text',
    inline: true,
    text: {
      content: 'JavaScript',
      annotations: {
        bold: false,
        code: false,
        italic: true,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content:
        ' のクラス宣言は、プロトタイプ継承のシンタックスシュガーである。',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'link_text',
    inline: true,
    link_text: {
      content: 'プロトタイプ継承',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      href: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chains',
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: 'のシンタックスシュガーである。',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  }
]

export const strikethrough: InlineComponent[] = [
  {
    component: 'text',
    inline: true,
    text: {
      content: 'TypeScript の型指定で ',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: 'any',
      annotations: {
        bold: false,
        code: true,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: ' を使用することは',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: '推奨されない',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: true,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  },
  {
    component: 'text',
    inline: true,
    text: {
      content: '。',
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      },
      color: { fg: 'default', bg: 'default' }
    }
  }
]
