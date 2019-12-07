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
    props: ['project'],
    methods: {

    }
	};
</script>


<style lang="sass">
//@import  "@/styles/project.sass"

</style>	

<!--
<template>
    <div class="article">

      <div class="headline">
        <h2>{{ ProjectName }}</h2>
        <h3>{{ $t('ProjectName.type') }}</h3>    
      </div>

      <div class="text-wrapper">

        <div class="intro">
          <p>{{ $t('intro.uno') }}</p>
          <p>{{ $t('intro.dos') }}</p>
       </div>

        <ul class="settings" >
         <h3>{{ $t('settings.uno') }}</h3> 
          <li>{{ $t('settings.set_one') }}</li>
          <li>{{ $t('settings.set_two') }}</li>
          <li>{{ $t('settings.set_three') }}</li>
          <li>{{ $t('settings.set_four') }}</li>
          <li>{{ $t('settings.set_five') }}</li>
          <li>{{ $t('settings.set_six') }}</li>
          <li>{{ $t('settings.set_seven') }}</li>
          <li>{{ $t('settings.set_eight') }}</li>
         <h4>{{ $t('settings.dos') }}</h4>
          <li>{{ $t('settings.set__one') }}</li>
          <li>{{ $t('settings.set__two') }}</li>
          <li>{{ $t('settings.set__three') }}</li>
          <li>{{ $t('settings.set__four') }}</li>
          <li>{{ $t('settings.set__five') }}</li>
        </ul>

        <div class="controls">
          <p>{{ $t('controls.uno') }}</p>
          <p>{{ $t('controls.dos') }}</p>
        </div>

        <div class="notice">
          <p>{{ $t('notice.uno') }}</p>
          <p>{{ $t('notice.dos') }}</p>
        </div>

        <div class="scheme">
          <p>{{ $t('schema.uno') }}</p><br>
          <p>{{ $t('schema.dos') }}</p>
        </div>
      </div>
      
      <div class="download">
        <a class="link" href="#">Download</a>
      </div>

    </div>
</template>


<script>
  export default {
    props: {
      ProjectName: String
    }
  };
</script>


<style lang="sass">
@import  "../../assets/styles/project.sass"

</style>    
-->