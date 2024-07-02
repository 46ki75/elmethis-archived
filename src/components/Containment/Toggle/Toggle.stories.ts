import type { Meta, StoryObj } from '@storybook/vue3'

import Toggle from './Toggle.vue'
import CodeBlock from '../../Code/CodeBlock/CodeBlock.vue'
import { ref } from 'vue'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Containment/Toggle',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Toggle>

const Template = (args: any) => ({
  components: { Toggle },
  setup() {
    return { args }
  },
  template: `
  <Toggle summary="ToggleBlock">
    <div>
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
  </Toggle>
  `
})

export const Primary: Story = {
  render: Template,
  args: {
    summary: 'Equation'
  }
}

const code = ref(`use reqwest::Error;
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
}`)

const TemplateCode = () => ({
  components: { Toggle, CodeBlock },
  setup() {
    return { code }
  },
  template: `
    <Toggle summary="Code">
      <CodeBlock :code="code" language="rust" />
    </Toggle>
  `
})

export const Code: Story = {
  render: TemplateCode,
  args: {
    summary: 'Code'
  }
}
