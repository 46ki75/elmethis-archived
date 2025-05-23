import { Meta, StoryObj } from '@storybook/vue3'

import CodeBlock from './elm-code-block.vue'

export default {
  component: CodeBlock,
  title: 'Components/Code/elm-code-block',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof CodeBlock>

const code = `
use reqwest::Error;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct Post {
    #[serde(rename = "userId")]
    user_id: u32,
    id: u32,
    title: String,
    body: String,
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let response = reqwest::get(url).await?;
    let posts: Vec<Post> = response.json().await?;

    for post in posts.iter().take(5) {
        println!("ID: {}, Title: {}", post.id, post.title);
    }

    Ok(())
}
`

export const Primary: Story = {
  args: {
    code,
    language: 'rust',
    theme: 'light'
  }
}

export const Dark: Story = {
  args: {
    code,
    language: 'rust',
    theme: 'dark'
  }
}

const tsCode = `
import { createHash } from 'crypto';

export function generateSHA256Hash(input: string): string {
  return createHash('sha256').update(input).digest('hex');
}
`

export const OtherLanguage: Story = {
  args: {
    code: tsCode,
    language: 'typescript',
    theme: 'light'
  }
}

export const WithCaption: Story = {
  args: {
    code,
    language: 'rust',
    caption: 'src/main.rs'
  }
}
