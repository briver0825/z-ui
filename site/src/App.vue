<template>
  <div class="app">
    <z-row :gutter="20">
      <z-col :span="20">
        <z-card title="Button 组件">
          <z-button>hello</z-button>
          <z-button primary>hello</z-button>
          <z-button danger>hello</z-button>
          <z-button success>hello</z-button>
          <z-button info>hello</z-button>
          <z-button warning>hello</z-button>

          <z-button primary plain>hello</z-button>
          <z-button danger plain>hello</z-button>
          <z-button success plain>hello</z-button>
          <z-button info plain>hello</z-button>
          <z-button warning plain>hello</z-button>

          <z-button round>hello</z-button>
          <z-button primary round>hello</z-button>
          <z-button danger round>hello</z-button>
          <z-button success round>hello</z-button>
          <z-button info round>hello</z-button>
          <z-button warning round>hello</z-button>
        </z-card>
      </z-col>
      <z-col :span="10">
        <z-card
          headerBg="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
          headerHeight="300px"
        >
          <z-button round>hello</z-button>
          <z-button primary round>hello</z-button>
          <z-button danger round>hello</z-button>
          <z-button success round>hello</z-button>
          <z-button info round>hello</z-button>
          <z-button warning round>hello</z-button>
        </z-card>
      </z-col>
    </z-row>
  </div>
</template>
