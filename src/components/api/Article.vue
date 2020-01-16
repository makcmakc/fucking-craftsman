<template>
    <div class="article">

      <div class="headline">
        <h2>{{ project.main_title }}</h2>
        <h3>{{ project.type }}</h3>    
      </div>

      <div class="text-wrapper">

        <div class="intro" v-for="intro in project.intros" :key="intro">
          <p>{{ intro.intro }}</p>
        </div>
        
        
        <div class="settings">
          <ul>
            <h3>{{ project.title_1 }}</h3>
            <li  v-for="set in project.settings" :key="set">
             {{ set.setting }}
            </li>

            <h4>{{ project.title_2 }}</h4>
            <li v-for="set in project.settings_dos" :key="set">
             {{ set.setting }}
            </li>
          </ul>
        </div>
        

        <div class="controls" v-for="control in project.controls" :key="control">
          <p>{{ control.control }}</p>
        </div>

        <div class="notice" v-for="notice in project.notices" :key="notice">
          <p>{{ notice.noti }}</p>
        </div>

        <div class="scheme" v-for="schema in project.schemes" :key="schema">
          <p>{{ schema.schem }}</p>
        </div>
      </div>
      
      <div class="download">
        <a class="link" href="#">{{ project.download }}</a>
      </div>

    </div>
</template>


<script>
	export default {
    props: ['project']
	};
</script>


<style lang="sass">
</style>	