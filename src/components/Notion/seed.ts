import { DOMJSON } from 'notion-ex/dist/DOMJSON'

export const seed: DOMJSON[] = [
  { type: 'heading_1', content: 'Axiosの使い方', children: [] },
  {
    type: 'paragraph',
    children: [
      {
        type: 'inline_text',
        content:
          'Axiosは、ブラウザとNode.js向けの人気のあるHTTPクライアントライブラリで、リクエストを簡単に送信できるため、多くの開発者に愛用されています。今回は、Axiosの基本的な使い方を紹介します。',
        color: 'default',
        children: []
      }
    ]
  },
  { type: 'paragraph', children: [] },
  {
    type: 'to_do',
    extension: { isChecked: false },
    children: [
      {
        type: 'inline_text',
        content: 'モジュールをインストールする',
        color: 'default',
        children: []
      }
    ]
  },
  {
    type: 'to_do',
    extension: { isChecked: false },
    children: [
      {
        type: 'inline_text',
        content: '統合開発環境を準備する',
        color: 'default',
        children: []
      }
    ]
  },
  { type: 'paragraph', children: [] },
  {
    type: 'table',
    children: [
      {
        type: 'table_row',
        children: [
          {
            type: 'table_cell',
            children: [
              {
                type: 'inline_text',
                content: 'A',
                color: 'default',
                children: []
              }
            ]
          },
          {
            type: 'table_cell',
            children: [
              {
                type: 'inline_text',
                content: 'B',
                color: 'default',
                children: []
              }
            ]
          },
          {
            type: 'table_cell',
            children: [
              {
                type: 'inline_text',
                content: 'C',
                color: 'default',
                children: []
              }
            ]
          }
        ]
      },
      {
        type: 'table_row',
        children: [
          {
            type: 'table_cell',
            children: [
              {
                type: 'inline_text',
                content: '1',
                color: 'default',
                children: []
              }
            ]
          },
          {
            type: 'table_cell',
            children: [
              {
                type: 'inline_text',
                content: 'B1',
                color: 'default',
                children: []
              }
            ]
          },
          {
            type: 'table_cell',
            children: [
              {
                type: 'inline_text',
                content: 'C1',
                color: 'default',
                children: []
              }
            ]
          }
        ]
      },
      {
        type: 'table_row',
        children: [
          {
            type: 'table_cell',
            children: [
              {
                type: 'inline_text',
                content: '2',
                color: 'default',
                children: []
              }
            ]
          },
          {
            type: 'table_cell',
            children: [
              {
                type: 'inline_text',
                content: 'B2',
                color: 'default',
                children: []
              }
            ]
          },
          {
            type: 'table_cell',
            children: [
              {
                type: 'inline_text',
                content: 'C2',
                color: 'default',
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  { type: 'paragraph', children: [] },
  {
    type: 'ul',
    children: [
      {
        type: 'li',
        children: [
          {
            type: 'inline_text',
            content: '箇条書き',
            color: 'default',
            children: []
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            type: 'inline_text',
            content: '過剰書き',
            color: 'default',
            children: []
          }
        ]
      }
    ]
  },
  { type: 'paragraph', children: [] },
  { type: 'divider', children: [] },
  { type: 'paragraph', children: [] },
  {
    type: 'quote',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'inline_text',
            content: '「失敗は成功のもと。」',
            color: 'default',
            children: []
          }
        ]
      }
    ]
  },
  { type: 'paragraph', children: [] },
  {
    type: 'bookmark',
    content: 'https://aws.amazon.com/jp/lambda/',
    extension: {
      title: 'AWS Lambda（イベント発生時にコードを実行）| AWS',
      description:
        'AWS Lambda を使用すれば、サーバーのプロビジョニングや管理なしでコードを実行できます。課金は実際に使用したコンピューティング時間に対してのみ発生し、コードが実行されていないときには料金も発生しません。',
      image:
        'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png'
    },
    children: []
  },
  { type: 'paragraph', children: [] },
  {
    type: 'callout',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'inline_text',
            content: '以下のテキストは暫定的なものです。',
            color: 'default',
            children: []
          }
        ]
      }
    ]
  },
  { type: 'heading_2', content: 'Axiosのインストール', children: [] },
  {
    type: 'paragraph',
    children: [
      {
        type: 'inline_text',
        content:
          'まず、Axiosをプロジェクトにインストールします。npmを使用して以下のコマンドを実行してください：',
        color: 'default',
        children: []
      }
    ]
  },
  {
    type: 'code',
    content: 'npm install axios',
    extension: { language: 'bash' },
    children: []
  },
  {
    type: 'toggle',
    content: 'または、yarnを使用する場合：',
    children: [
      {
        type: 'code',
        content: 'yarn add axios',
        extension: { language: 'shell' },
        children: []
      }
    ]
  },
  { type: 'heading_2', content: '基本的な使い方', children: [] },
  {
    type: 'paragraph',
    children: [
      {
        type: 'inline_text',
        content:
          'Axiosを使用してGETリクエストを送信する基本的な例を見てみましょう：',
        color: 'default',
        children: []
      }
    ]
  },
  {
    type: 'code',
    content:
      "const axios = require('axios');\n" +
      '\n' +
      "axios.get('<https://jsonplaceholder.typicode.com/posts>')\n" +
      '  .then(response => {\n' +
      '    console.log(response.data);\n' +
      '  })\n' +
      '  .catch(error => {\n' +
      "    console.error('Error fetching data:', error);\n" +
      '  });\n',
    extension: { language: 'javascript' },
    children: []
  },
  { type: 'heading_2', content: 'まとめ', children: [] },
  {
    type: 'paragraph',
    children: [
      {
        type: 'inline_link',
        content: 'Axios',
        color: 'default',
        children: []
      },
      {
        type: 'inline_text',
        content: 'は、シンプルで強力な',
        color: 'blue',
        children: []
      },
      {
        type: 'inline_text',
        content: 'HTTPクライアントライブラリ',
        color: 'green_background',
        children: []
      },
      {
        type: 'inline_text',
        content: 'であり、リクエストの送信を',
        color: 'default',
        children: []
      },
      {
        type: 'inline_bold',
        content: '簡単',
        color: 'default',
        children: []
      },
      {
        type: 'inline_text',
        content:
          'にします。このブログでは、基本的な使い方を紹介しましたが、公式ドキュメント',
        color: 'default',
        children: []
      },
      {
        type: 'inline_code',
        content: 'document',
        color: 'default',
        children: []
      },
      {
        type: 'inline_text',
        content:
          'を参照することでさらに詳細な機能を学ぶことができます。ぜひ試してみてください！',
        color: 'default',
        children: []
      }
    ]
  },
  { type: 'paragraph', children: [] },
  {
    type: 'image',
    content:
      'https://images.unsplash.com/photo-1713970700051-556d05c59fce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    children: []
  },
  { type: 'paragraph', children: [] },
  {
    type: 'column_list',
    children: [
      {
        type: 'column',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'inline_text',
                content: '1col',
                color: 'default',
                children: []
              }
            ]
          }
        ]
      },
      {
        type: 'column',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'inline_text',
                content: '2col',
                color: 'default',
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'equation',
    content: 'e=mc^2',
    children: []
  }
]
