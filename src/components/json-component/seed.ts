import type { Component } from 'json-component-spec'

export const seed: Component[] = [
  {
    component: 'heading',
    inline: false,
    heading: {
      level: 2,
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'Lambda関数の作成',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              'Cargo Lambda を使用して Lambda 関数を初期化します。以下のコマンドで新しい関数を作成します。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content: 'cargo lambda new {プロジェクト名}',
      caption: '',
      language: 'bash'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: '今回はHTTP APIを作成するため、質問には ',
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
            content: 'y',
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
            content: ' で回答してください。',
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
    }
  },
  {
    component: 'image',
    inline: false,
    image: {
      src: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/906620e1-4b96-4427-bba0-af8b28119cd7/322bc972-92d9-406f-bce9-6ceea62fe364/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240813T015040Z&X-Amz-Expires=3600&X-Amz-Signature=651ac82513d06c5b58deeaeb87120f86c5459ddb4278fa4ed1cc139c2c6e4402&X-Amz-SignedHeaders=host&x-id=GetObject',
      alt: ''
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'heading',
    inline: false,
    heading: {
      level: 3,
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'ローカルでのテスト',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              '作成されたディレクトリで、次のコマンドを実行してみてください。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: { content: 'cargo lambda watch', caption: '', language: 'bash' }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              'こちらのコマンドを入力すると、ローカルで Lambda 関数のサーバーが起動します。Lambda の Function URL 機能に対応しているため、こちらから GraphQL API のテストをローカルで行うことができます。',
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
            content: 'localhost:9000',
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
            content:
              ' にアクセスして正常にレスポンスが返ってくるか確認してみてください。',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'image',
    inline: false,
    image: {
      src: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/906620e1-4b96-4427-bba0-af8b28119cd7/987a9291-28bc-4aeb-af07-2d1d9c6394c5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240813T015040Z&X-Amz-Expires=3600&X-Amz-Signature=28a8f2dc2f919c66b398a225dddd018c680a0fee3d37c352f3581b7585bc3f90&X-Amz-SignedHeaders=host&x-id=GetObject',
      alt: ''
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'heading',
    inline: false,
    heading: {
      level: 2,
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'GraphQL API サーバーの作成',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: '必要なクレートを追加します。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content:
        'cargo add async-graphql\n' +
        'cargo add serde --features derive\n' +
        'cargo add serde_json',
      caption: '',
      language: 'bash'
    }
  },
  {
    component: 'heading',
    inline: false,
    heading: {
      level: 3,
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'playground の表示',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'GraphQL API の作成を行う前に、',
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
            content: 'テストを簡単に行う',
            annotations: {
              bold: true,
              code: false,
              italic: false,
              strikethrough: false,
              underline: false
            },
            color: { fg: 'orange', bg: 'default' }
          }
        },
        {
          component: 'text',
          inline: true,
          text: {
            content: 'ことができるように playground を表示するようにします。',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              '以下のコードは、GET メソッドでアクセスを受けたときに playground (',
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
            content: 'GraphiQL',
            annotations: {
              bold: false,
              code: false,
              italic: false,
              strikethrough: false,
              underline: false
            },
            color: { fg: 'default', bg: 'default' },
            href: 'https://github.com/graphql/graphiql'
          }
        },
        {
          component: 'text',
          inline: true,
          text: {
            content: ') を表示します。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content:
        'use async_graphql::http::GraphiQLSource;\n' +
        'use lambda_http::{run, service_fn, tracing, Body, Error, Request, Response};\n' +
        'use serde_json::json;\n' +
        '\n' +
        'async fn function_handler(event: Request) -> Result<Response<Body>, Error> {\n' +
        '    if event.method() == Method::GET {\n' +
        '        let playground_html = GraphiQLSource::build().finish();\n' +
        '        let response = Response::builder()\n' +
        '            .status(200)\n' +
        '            .header("content-type", "text/html")\n' +
        '            .body(playground_html.into())\n' +
        '            .map_err(Box::new)?;\n' +
        '        Ok(response)\n' +
        '    } else if event.method() Method::POST {\n' +
        '        todo!("GraphQL API");\n' +
        '    } else {\n' +
        '        let response = Response::builder()\n' +
        '            .status(405)\n' +
        '            .header("content-type", "application/json")\n' +
        '            .body(json!({"error":"Method Not Allowed"}).to_string().into())\n' +
        '            .map_err(Box::new)?;\n' +
        '        Ok(response)\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        '#[tokio::main]\n' +
        'async fn main() -> Result<(), Error> {\n' +
        '    tracing::init_default_subscriber();\n' +
        '    run(service_fn(function_handler)).await\n' +
        '}\n',
      caption: 'src/main.rs',
      language: 'rust'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: '以下のコマンドを実行後、ブラウザから ',
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
            content: 'localhost:9000',
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
            content:
              ' にアクセスして、GraphiQL Playground が表示されることを確認してください。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: { content: 'cargo lambda watch', caption: '', language: 'rust' }
  },
  {
    component: 'image',
    inline: false,
    image: {
      src: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/906620e1-4b96-4427-bba0-af8b28119cd7/a1bede2d-2f2a-4d5a-b9b7-9897fa9e4989/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240813T015040Z&X-Amz-Expires=3600&X-Amz-Signature=71f93599156eafb827dd266b38b0d35ab786ee6a4a1be68c552ad8368b7cb27c&X-Amz-SignedHeaders=host&x-id=GetObject',
      alt: ''
    }
  },
  {
    component: 'heading',
    inline: false,
    heading: {
      level: 3,
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'GraphQL API の実装',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              'GraphQL API は単一エンドポイント・POSTメソッドですべてのリクエストを処理します。',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              '新たにファイルを作成します。query.rs でクエリルートを設定し、リゾルバーは ',
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
            content: 'resolvers/',
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
            content: ' 以下に保管します。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content:
        'src/\n' +
        '├── main.rs\n' +
        '├── query.rs\n' +
        '├── resolvers\n' +
        '│   └── greet.rs\n' +
        '└── resolvers.rs',
      caption: '',
      language: 'plain text'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              'クエリのリゾルバーを作成します。最初は定数を返すのみのリゾルバーとします。簡単なリゾルバーは ',
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
            content: 'SimpleObject',
            annotations: {
              bold: false,
              code: false,
              italic: false,
              strikethrough: false,
              underline: false
            },
            color: { fg: 'default', bg: 'default' },
            href: 'https://async-graphql.github.io/async-graphql/en/define_simple_object.html'
          }
        },
        {
          component: 'text',
          inline: true,
          text: {
            content: ' でも実装できますが、今回は通常の ',
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
            content: 'Object',
            annotations: {
              bold: false,
              code: false,
              italic: false,
              strikethrough: false,
              underline: false
            },
            color: { fg: 'default', bg: 'default' },
            href: 'https://async-graphql.github.io/async-graphql/en/define_complex_object.html'
          }
        },
        {
          component: 'text',
          inline: true,
          text: {
            content: ' アトリビュートで作成します。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content:
        'pub struct Greet {\n' +
        '    pub message: String,\n' +
        '    pub language: String,\n' +
        '}\n' +
        '\n' +
        'impl Greet {\n' +
        '    pub fn new() -> Result<Self, async_graphql::Error> {\n' +
        '        Ok(Greet {\n' +
        '            message: "Hello, GraphQL!".to_string(),\n' +
        '            language: "Rust".to_string(),\n' +
        '        })\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        '#[async_graphql::Object]\n' +
        'impl Greet {\n' +
        '    /// A delightful message from the server\n' +
        '    pub async fn message(&self) -> String {\n' +
        '        self.message.to_string()\n' +
        '    }\n' +
        '\n' +
        '    /// Languages that implement GraphQL\n' +
        '    pub async fn language(&self) -> String {\n' +
        '        self.language.to_string()\n' +
        '    }\n' +
        '}\n',
      caption: 'src/resolvers/greet.rs',
      language: 'rust'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'リゾルバーをクエリルートに登録します。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content: 'pub mod greet;',
      caption: 'src/resolvers.rs',
      language: 'rust'
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content:
        'use async_graphql::*;\n' +
        '\n' +
        'pub struct QueryRoot;\n' +
        '\n' +
        'use crate::resolvers;\n' +
        '\n' +
        '#[async_graphql::Object]\n' +
        'impl QueryRoot {\n' +
        '    /// Returns a greeting message along with the programming language.\n' +
        '    pub async fn greet(&self) -> Result<resolvers::greet::Greet, async_graphql::Error> {\n' +
        '        resolvers::greet::Greet::new()\n' +
        '    }\n' +
        '}\n',
      caption: 'src/query.rs',
      language: 'rust'
    }
  },
  {
    component: 'callout',
    inline: false,
    callout: {
      color: 'blue',
      children: [
        {
          component: 'paragraph',
          inline: false,
          paragraph: {
            children: [
              {
                component: 'text',
                inline: true,
                text: {
                  content: 'async-graphql は rustdoc のコメント ',
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
                  content: '///',
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
                  content:
                    ' でクエリやフィールドのドキュメンテーションを行うことができます。',
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
          }
        }
      ],
      icon: 'info'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              'エントリポイントで GraphQL のリクエストを処理するように設定します。以下のコードの POST メソッドで分岐している部分のブロックです。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content:
        'use async_graphql::{http::GraphiQLSource, EmptyMutation, EmptySubscription, Schema};\n' +
        'use lambda_http::{run, service_fn, tracing, Body, Error, Request, Response};\n' +
        'use serde_json::json;\n' +
        '\n' +
        'mod query;\n' +
        'mod resolvers;\n' +
        '\n' +
        'async fn function_handler(event: Request) -> Result<Response<Body>, Error> {\n' +
        '    let schema = Schema::build(query::QueryRoot, EmptyMutation, EmptySubscription).finish();\n' +
        '\n' +
        '    if event.method() == Method::GET {\n' +
        '        let playground_html = GraphiQLSource::build().finish();\n' +
        '        let response = Response::builder()\n' +
        '            .status(200)\n' +
        '            .header("content-type", "text/html")\n' +
        '            .body(playground_html.into())\n' +
        '            .map_err(Box::new)?;\n' +
        '        Ok(response)\n' +
        '    } else if event.method() == Method::POST {\n' +
        '        let request_body = event.body();\n' +
        '\n' +
        '        let gql_request = match serde_json::from_slice::<async_graphql::Request>(request_body) {\n' +
        '            Ok(request) => request,\n' +
        '            Err(err) => {\n' +
        '                return Ok(Response::builder()\n' +
        '                    .status(400)\n' +
        '                    .header("content-type", "application/json")\n' +
        '                    .body(\n' +
        '                        json!({"error": format!("Invalid request body: {}", err)})\n' +
        '                            .to_string()\n' +
        '                            .into(),\n' +
        '                    )\n' +
        '                    .map_err(Box::new)?);\n' +
        '            }\n' +
        '        };\n' +
        '\n' +
        '        let gql_response = schema.execute(gql_request).await;\n' +
        '\n' +
        '        let response_body = match serde_json::to_string(&gql_response) {\n' +
        '            Ok(body) => body,\n' +
        '            Err(err) => {\n' +
        '                return Ok(Response::builder()\n' +
        '                    .status(500)\n' +
        '                    .header("content-type", "application/json")\n' +
        '                    .body(\n' +
        '                        json!({"error": format!("Failed to serialize response: {}", err)})\n' +
        '                            .to_string()\n' +
        '                            .into(),\n' +
        '                    )\n' +
        '                    .map_err(Box::new)?);\n' +
        '            }\n' +
        '        };\n' +
        '\n' +
        '        Ok(Response::builder()\n' +
        '            .status(200)\n' +
        '            .header("content-type", "application/json")\n' +
        '            .body(response_body.into())\n' +
        '            .map_err(Box::new)?)\n' +
        '    } else {\n' +
        '        let response = Response::builder()\n' +
        '            .status(405)\n' +
        '            .header("content-type", "application/json")\n' +
        '            .body(json!({"error":"Method Not Allowed"}).to_string().into())\n' +
        '            .map_err(Box::new)?;\n' +
        '        Ok(response)\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        '#[tokio::main]\n' +
        'async fn main() -> Result<(), Error> {\n' +
        '    tracing::init_default_subscriber();\n' +
        '    run(service_fn(function_handler)).await\n' +
        '}\n',
      caption: '',
      language: 'rust'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              '正常にクエリができるか playground で確認してみてください。',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'image',
    inline: false,
    image: {
      src: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/906620e1-4b96-4427-bba0-af8b28119cd7/ac71b801-4ff6-4ec2-90e0-a5b0d0429968/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240813T015040Z&X-Amz-Expires=3600&X-Amz-Signature=db94f53d2a037e7a574e6b4cfaa210145ce7b66bd84c1b8e50728bc4b7f6bd13&X-Amz-SignedHeaders=host&x-id=GetObject',
      alt: ''
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'toggle',
    inline: false,
    toggle: {
      summary: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'コンテクストの追加',
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
      ],
      details: [
        {
          component: 'paragraph',
          inline: false,
          paragraph: {
            children: [
              {
                component: 'text',
                inline: true,
                text: {
                  content: 'スキーマの作成時に ',
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
                  content: '.data()',
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
                  content:
                    ' メソッドでコンテクストを追加できます。コンテクストの取得は型で行われるため、型は重要です。',
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
          }
        },
        {
          component: 'code',
          inline: false,
          code: {
            content:
              '    let schema = Schema::build(query::QueryRoot, EmptyMutation, EmptySubscription)\n' +
              '        .data(event.headers().clone())\n' +
              '        .finish();',
            caption: 'src/main.rs',
            language: 'rust'
          }
        },
        {
          component: 'paragraph',
          inline: false,
          paragraph: {
            children: [
              {
                component: 'text',
                inline: true,
                text: {
                  content:
                    'クエリルートからコンテクストを渡すようにします。リゾルバーの ',
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
                  content: 'new()',
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
                  content: ' 静的メソッドの引数も後で変更します。',
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
          }
        },
        {
          component: 'code',
          inline: false,
          code: {
            content:
              'use async_graphql::*;\n' +
              '\n' +
              'pub struct QueryRoot;\n' +
              '\n' +
              'use crate::resolvers;\n' +
              '\n' +
              '#[async_graphql::Object]\n' +
              'impl QueryRoot {\n' +
              '    /// Returns a greeting message along with the programming language.\n' +
              '    pub async fn greet(\n' +
              '        &self,\n' +
              "        ctx: &async_graphql::Context<'_>,\n" +
              '    ) -> Result<resolvers::greet::Greet, async_graphql::FieldError> {\n' +
              '        resolvers::greet::Greet::new(ctx)\n' +
              '    }\n' +
              '}\n',
            caption: 'src/query.rs',
            language: 'rust'
          }
        },
        {
          component: 'paragraph',
          inline: false,
          paragraph: {
            children: [
              {
                component: 'text',
                inline: true,
                text: {
                  content: 'リゾルバーでコンテクストを受け取り、使用します。',
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
                  content: '.data::<HeaderMap<HeaderValue>>()',
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
                  content:
                    ' の部分でわかるように、型を基にデータを取得しています。同じ型のデータがスキーマ作成時に渡された場合は後から書かれたものが上書きされます。',
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
          }
        },
        {
          component: 'code',
          inline: false,
          code: {
            content:
              'use lambda_http::http::{HeaderMap, HeaderValue};\n' +
              '\n' +
              'pub struct Greet {\n' +
              '    pub message: String,\n' +
              '    pub language: String,\n' +
              '    pub content_type: String,\n' +
              '}\n' +
              '\n' +
              'impl Greet {\n' +
              '    pub fn new(ctx: &async_graphql::Context) -> Result<Self, async_graphql::FieldError> {\n' +
              '        Ok(Greet {\n' +
              '            message: "Hello, GraphQL!".to_string(),\n' +
              '            language: "Rust".to_string(),\n' +
              '            content_type: ctx\n' +
              '                .data::<HeaderMap<HeaderValue>>()\n' +
              '                .unwrap()\n' +
              '                .get("content-type")\n' +
              '                .unwrap()\n' +
              '                .to_str()\n' +
              '                .unwrap_or_default()\n' +
              '                .to_string(),\n' +
              '        })\n' +
              '    }\n' +
              '}\n' +
              '\n' +
              '#[async_graphql::Object]\n' +
              'impl Greet {\n' +
              '    /// A delightful message from the server\n' +
              '    pub async fn message(&self) -> String {\n' +
              '        self.message.to_string()\n' +
              '    }\n' +
              '\n' +
              '    /// Languages that implement GraphQL\n' +
              '    pub async fn language(&self) -> String {\n' +
              '        self.language.to_string()\n' +
              '    }\n' +
              '\n' +
              '    pub async fn content_type(&self) -> String {\n' +
              '        self.content_type.to_string()\n' +
              '    }\n' +
              '}\n',
            caption: '',
            language: 'rust'
          }
        },
        {
          component: 'paragraph',
          inline: false,
          paragraph: { children: [] }
        }
      ]
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'heading',
    inline: false,
    heading: {
      level: 2,
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'Lambda 関数のデプロイ',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              '今回は Lambda 関数を AWS CDK を使用してデプロイしたいと思います。',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'heading',
    inline: false,
    heading: {
      level: 3,
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'Lambda 関数のビルド',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: '以下のコマンドで、',
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
            content: 'target/lambda/{クレート名}/',
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
            content: ' ディレクトリに実行可能バイナリが生成されます。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content: 'cargo lambda build --release',
      caption: '',
      language: 'bash'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'こちらのディレクトに内にある ',
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
            content: 'bootstrap',
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
            content:
              ' ファイルがエントリーポイントとなります。こちらのファイルをデプロイしていきます。',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'heading',
    inline: false,
    heading: {
      level: 3,
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'CDK プロジェクトの初期化',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              'AWS CDK を使用して Lambda 関数をデプロイします。CDK プロジェクトを初期化します。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content: 'mkdir cdk\ncd cdk\ncdk init app --language typescript',
      caption: '',
      language: 'bash'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'heading',
    inline: false,
    heading: {
      level: 3,
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'Lambda スタックの作成',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              'まずは、Lambda 関数の機能である Function URL を使用してデプロイを行いたいと思います。以下のようなスタックを作成してください。',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content:
        "import * as cdk from 'aws-cdk-lib'\n" +
        "import { Construct } from 'constructs'\n" +
        "import * as lambda from 'aws-cdk-lib/aws-lambda'\n" +
        "import * as path from 'path'\n" +
        '\n' +
        'export class LambdaStack extends cdk.Stack {\n' +
        '  constructor(scope: Construct, id: string, props?: cdk.StackProps) {\n' +
        '    super(scope, id, props)\n' +
        '\n' +
        "    const lambdaFunction = new lambda.Function(this, 'LambdaFunction', {\n" +
        "      functionName: 'rust-graphql-function-url',\n" +
        '      code: lambda.Code.fromAsset(\n' +
        "        path.resolve(__dirname, '../../target/lambda/lambda-rust-graphql/')\n" +
        '      ),\n' +
        "      handler: 'main',\n" +
        '      runtime: lambda.Runtime.PROVIDED_AL2023\n' +
        '    })\n' +
        '\n' +
        "    const lambdaVersion = new lambda.Version(this, 'LambdaVersion', {\n" +
        '      lambda: lambdaFunction\n' +
        '    })\n' +
        '\n' +
        "    const lambdaAlias = new lambda.Alias(this, 'LambdaAlias', {\n" +
        "      aliasName: 'latest',\n" +
        '      version: lambdaVersion.latestVersion\n' +
        '    })\n' +
        '\n' +
        "    const lambdaFunctionURL = new lambda.FunctionUrl(this, 'FunctionURL', {\n" +
        '      function: lambdaAlias,\n' +
        '      authType: lambda.FunctionUrlAuthType.NONE\n' +
        '    })\n' +
        '\n' +
        "    new cdk.CfnOutput(this, 'FunctionURLOutput', {\n" +
        '      value: lambdaFunctionURL.url\n' +
        '    })\n' +
        '  }\n' +
        '}\n',
      caption: 'cdk/lib/lambda.ts',
      language: 'typescript'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              'CDK のエントリーポイントでスタックをインポートしてインスタンスを作成します。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content:
        '#!/usr/bin/env node\n' +
        "import 'source-map-support/register'\n" +
        "import * as cdk from 'aws-cdk-lib'\n" +
        "import { LambdaStack } from '../lib/lambda'\n" +
        '\n' +
        'const app = new cdk.App()\n' +
        "new LambdaStack(app, 'Lambda', {\n" +
        '  env: {\n' +
        '    account: process.env.CDK_DEFAULT_ACCOUNT,\n' +
        '    region: process.env.CDK_DEFAULT_REGION\n' +
        '  }\n' +
        '})\n',
      caption: 'cdk/bin/cdk.ts',
      language: 'typescript'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'heading',
    inline: false,
    heading: {
      level: 3,
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'Lambda スタックのデプロイ',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              '以下のコマンドで関数をデプロイしてみてください。標準出力から Lambda の Function URL が CloudFormation Output として出力されると思います。',
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
    }
  },
  {
    component: 'code',
    inline: false,
    code: {
      content: 'cdk deploy Lambda [--profile]',
      caption: '',
      language: 'bash'
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content:
              'Function URL はマネジメントコンソールからも確認できます。(エイリアスを使用しているためデフォルトの画面には表示されない点に注意)',
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
    }
  },
  {
    component: 'image',
    inline: false,
    image: {
      src: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/906620e1-4b96-4427-bba0-af8b28119cd7/f20446a1-7c72-4247-8481-24c55b1a82a1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240813T015040Z&X-Amz-Expires=3600&X-Amz-Signature=931d98a27c91c65436a2e7744098af2330830bbb69543ccf334143752eb1042a&X-Amz-SignedHeaders=host&x-id=GetObject',
      alt: ''
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'こちらのURL (',
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
            content: 'https://*.lambda-url.ap-northeast-1.on.aws',
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
            content:
              ')にアクセスして、playground が表示されれば成功です！ローカルのときと同じようにクエリを行ってみてください。',
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
    }
  },
  {
    component: 'image',
    inline: false,
    image: {
      src: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/906620e1-4b96-4427-bba0-af8b28119cd7/2912ce6c-10c1-4fce-9bea-5ab965531cde/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240813T015040Z&X-Amz-Expires=3600&X-Amz-Signature=87aa69e745072a4624f958cf9490f797331461e1f57182c6beb87e47ccf81468&X-Amz-SignedHeaders=host&x-id=GetObject',
      alt: ''
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'toggle',
    inline: false,
    toggle: {
      summary: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'おまけ: API Gateway でのデプロイ',
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
      ],
      details: [
        {
          component: 'paragraph',
          inline: false,
          paragraph: {
            children: [
              {
                component: 'text',
                inline: true,
                text: {
                  content:
                    'Lambda 関数の Function URL でも十分な機能はありますが、より高度な機能を利用したい場合は Amazon API Gateway を使用します。',
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
          }
        },
        {
          component: 'paragraph',
          inline: false,
          paragraph: {
            children: [
              {
                component: 'text',
                inline: true,
                text: {
                  content: 'API Gateway をデプロイするスタックを作成します。',
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
          }
        },
        {
          component: 'code',
          inline: false,
          code: {
            content:
              "import * as cdk from 'aws-cdk-lib'\n" +
              "import { Construct } from 'constructs'\n" +
              "import * as lambda from 'aws-cdk-lib/aws-lambda'\n" +
              "import * as apigwv2 from 'aws-cdk-lib/aws-apigatewayv2'\n" +
              "import * as path from 'path'\n" +
              "import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations'\n" +
              '\n' +
              'export class APIGWStack extends cdk.Stack {\n' +
              '  constructor(scope: Construct, id: string, props?: cdk.StackProps) {\n' +
              '    super(scope, id, props)\n' +
              '\n' +
              "    const lambdaFunction = new lambda.Function(this, 'LambdaFunction', {\n" +
              "      functionName: 'rust-graphql-apigw',\n" +
              '      code: lambda.Code.fromAsset(\n' +
              "        path.resolve(__dirname, '../../target/lambda/lambda-rust-graphql/')\n" +
              '      ),\n' +
              "      handler: 'main',\n" +
              '      runtime: lambda.Runtime.PROVIDED_AL2023\n' +
              '    })\n' +
              '\n' +
              "    const lambdaVersion = new lambda.Version(this, 'LambdaVersion', {\n" +
              '      lambda: lambdaFunction\n' +
              '    })\n' +
              '\n' +
              "    const lambdaAlias = new lambda.Alias(this, 'LambdaAlias', {\n" +
              "      aliasName: 'latest',\n" +
              '      version: lambdaVersion.latestVersion\n' +
              '    })\n' +
              '\n' +
              "    const api = new apigwv2.HttpApi(this, 'APIGW', {\n" +
              "      apiName: 'rust-graphql-apigw'\n" +
              '    })\n' +
              '\n' +
              '    api.addRoutes({\n' +
              '      integration: new HttpLambdaIntegration(\n' +
              "        'APILambdaIntegration',\n" +
              '        lambdaAlias\n' +
              '      ),\n' +
              "      path: '/{all+}'\n" +
              '    })\n' +
              '\n' +
              "    new cdk.CfnOutput(this, 'APIGWEndpoint', {\n" +
              '      value: api.apiEndpoint\n' +
              '    })\n' +
              '  }\n' +
              '}\n',
            caption: 'cdk/lib/apigw.ts',
            language: 'typescript'
          }
        },
        {
          component: 'paragraph',
          inline: false,
          paragraph: { children: [] }
        },
        {
          component: 'paragraph',
          inline: false,
          paragraph: {
            children: [
              {
                component: 'text',
                inline: true,
                text: {
                  content:
                    'エントリーポイントで API Gateway のスタックを作成します。',
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
          }
        },
        {
          component: 'code',
          inline: false,
          code: {
            content:
              '#!/usr/bin/env node\n' +
              "import 'source-map-support/register'\n" +
              "import * as cdk from 'aws-cdk-lib'\n" +
              "import { LambdaStack } from '../lib/lambda'\n" +
              "import { APIGWStack } from '../lib/apigw'\n" +
              '\n' +
              'const app = new cdk.App()\n' +
              '\n' +
              "new LambdaStack(app, 'Lambda', {\n" +
              '  env: {\n' +
              '    account: process.env.CDK_DEFAULT_ACCOUNT,\n' +
              '    region: process.env.CDK_DEFAULT_REGION\n' +
              '  }\n' +
              '})\n' +
              '\n' +
              "new APIGWStack(app, 'APIGW', {\n" +
              '  env: {\n' +
              '    account: process.env.CDK_DEFAULT_ACCOUNT,\n' +
              '    region: process.env.CDK_DEFAULT_REGION\n' +
              '  }\n' +
              '})\n',
            caption: 'cdk/bin/cdk.ts',
            language: 'typescript'
          }
        },
        {
          component: 'paragraph',
          inline: false,
          paragraph: { children: [] }
        },
        {
          component: 'paragraph',
          inline: false,
          paragraph: {
            children: [
              {
                component: 'text',
                inline: true,
                text: {
                  content:
                    'デプロイを行います。今回も CloudFormation Output でエンドポイントのURLが出力されるはずです。',
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
          }
        },
        {
          component: 'code',
          inline: false,
          code: {
            content: 'cdk deploy APIGW [--profile]',
            caption: '',
            language: 'typescript'
          }
        },
        {
          component: 'paragraph',
          inline: false,
          paragraph: { children: [] }
        }
      ]
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: {
      children: [
        {
          component: 'text',
          inline: true,
          text: {
            content: 'コード例は',
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
            content: 'こちら',
            annotations: {
              bold: false,
              code: false,
              italic: false,
              strikethrough: false,
              underline: false
            },
            color: { fg: 'default', bg: 'default' },
            href: 'https://github.com/46ki75/examples/tree/main/aws/lambda/rust/lambda-rust-graphql'
          }
        },
        {
          component: 'text',
          inline: true,
          text: {
            content: 'から確認できます。',
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
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'table',
    inline: false,
    table: {
      header: {
        component: 'table_row',
        inline: false,
        table_row: {
          cells: [
            {
              component: 'table_cell',
              inline: false,
              table_cell: {
                children: [
                  {
                    component: 'text',
                    inline: true,
                    text: {
                      content: 'ヘッダー左',
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
              }
            },
            {
              component: 'table_cell',
              inline: false,
              table_cell: {
                children: [
                  {
                    component: 'text',
                    inline: true,
                    text: {
                      content: 'ヘッダー右',
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
              }
            }
          ]
        }
      },
      rows: [
        {
          component: 'table_row',
          inline: false,
          table_row: {
            cells: [
              {
                component: 'table_cell',
                inline: false,
                table_cell: {
                  children: [
                    {
                      component: 'text',
                      inline: true,
                      text: {
                        content: '左上',
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
                }
              },
              {
                component: 'table_cell',
                inline: false,
                table_cell: {
                  children: [
                    {
                      component: 'text',
                      inline: true,
                      text: {
                        content: '右上',
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
                }
              }
            ]
          }
        },
        {
          component: 'table_row',
          inline: false,
          table_row: {
            cells: [
              {
                component: 'table_cell',
                inline: false,
                table_cell: {
                  children: [
                    {
                      component: 'text',
                      inline: true,
                      text: {
                        content: '左下',
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
                }
              },
              {
                component: 'table_cell',
                inline: false,
                table_cell: {
                  children: [
                    {
                      component: 'text',
                      inline: true,
                      text: {
                        content: '右下',
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
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  },
  {
    component: 'paragraph',
    inline: false,
    paragraph: { children: [] }
  }
]

export const callout: Component[] = [
  {
    component: 'callout',
    inline: false,
    callout: {
      color: 'blue',
      children: [
        {
          component: 'paragraph',
          inline: false,
          paragraph: {
            children: [
              {
                component: 'text',
                inline: true,
                text: {
                  content: 'If a user-defined ',
                  annotations: {
                    bold: false,
                    code: false,
                    italic: false,
                    strikethrough: false,
                    underline: false
                  },
                  color: {
                    fg: 'default',
                    bg: 'default'
                  }
                }
              },
              {
                component: 'text',
                inline: true,
                text: {
                  content: 'bridge network',
                  annotations: {
                    bold: true,
                    code: false,
                    italic: false,
                    strikethrough: false,
                    underline: false
                  },
                  color: {
                    fg: 'blue',
                    bg: 'default'
                  }
                }
              },
              {
                component: 'text',
                inline: true,
                text: {
                  content:
                    ' is created, a DNS resolver is automatically enabled to ',
                  annotations: {
                    bold: false,
                    code: false,
                    italic: false,
                    strikethrough: false,
                    underline: false
                  },
                  color: {
                    fg: 'default',
                    bg: 'default'
                  }
                }
              },
              {
                component: 'text',
                inline: true,
                text: {
                  content: 'allow communication between containers',
                  annotations: {
                    bold: true,
                    code: false,
                    italic: false,
                    strikethrough: false,
                    underline: false
                  },
                  color: {
                    fg: 'default',
                    bg: 'default'
                  }
                }
              },
              {
                component: 'text',
                inline: true,
                text: {
                  content: ' ',
                  annotations: {
                    bold: false,
                    code: false,
                    italic: false,
                    strikethrough: false,
                    underline: false
                  },
                  color: {
                    fg: 'default',
                    bg: 'default'
                  }
                }
              },
              {
                component: 'text',
                inline: true,
                text: {
                  content: 'using container names',
                  annotations: {
                    bold: true,
                    code: false,
                    italic: false,
                    strikethrough: false,
                    underline: false
                  },
                  color: {
                    fg: 'purple',
                    bg: 'default'
                  }
                }
              },
              {
                component: 'text',
                inline: true,
                text: {
                  content: '.',
                  annotations: {
                    bold: false,
                    code: false,
                    italic: false,
                    strikethrough: false,
                    underline: false
                  },
                  color: {
                    fg: 'default',
                    bg: 'default'
                  }
                }
              }
            ]
          }
        }
      ],
      icon: 'info'
    }
  }
]
