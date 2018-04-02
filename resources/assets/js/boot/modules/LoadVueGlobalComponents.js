import vueCommandButton         from './vue-components/CommandButton'
import vueEditbox               from './vue-components/Editbox'
import vueSummernoteEditbox     from './vue-components/EditboxSummernote'
import vueICheckbox             from './vue-components/ICheck'
import vueSelectbox             from './vue-components/SelectVue'
import vueSelectsimple          from './vue-components/SelectSimple'
import vueNumber                from './vue-components/Number'
import vueTextbox               from './vue-components/Textbox'
import vueDatepicker            from './vue-components/Datepicker'
import vuePhone                 from './vue-components/Phone'
import vueToolbar               from './vue-components/Toolbar'
import vuePagination            from './vue-components/Pagination'
import vueImageUploader         from './vue-components/ImageUploader'
import vueImage                 from './vue-components/Image'
import vueModal                 from './vue-components/Modal'
import vueAlert                 from './vue-components/Alert'


class LoadVueGlobalComponents 
{

	constructor()
	{
   		if(! LoadVueGlobalComponents.instance)
   		{
            this.components = [
                {tag: 'vue-command-button',     module: vueCommandButton},
                {tag: 'vue-editbox',            module: vueEditbox},
                {tag: 'vue-summernote',         module: vueSummernoteEditbox}, 
                {tag: 'vue-icheck-box',         module: vueICheckbox}, 
                {tag: 'vue-select-box',         module: vueSelectbox},
                {tag: 'vue-select-simple',      module: vueSelectsimple},
                {tag: 'vue-textbox',            module: vueTextbox},
                {tag: 'vue-datepicker',         module: vueDatepicker},
                {tag: 'vue-phone',              module: vuePhone},
                {tag: 'vue-number',             module: vueNumber},
                {tag: 'vue-toolbar',            module: vueToolbar},
                {tag: 'vue-pagination',         module: vuePagination},
                {tag: 'vue-image-uploader',     module: vueImageUploader},
                {tag: 'vue-image',              module: vueImage},

                {tag: 'vue-modal',              module: vueModal},
                {tag: 'vue-alert',              module: vueAlert}
            ]
     		LoadVueGlobalComponents.instance = this;
   		}
   		return LoadVueGlobalComponents.instance;
  	}

  	boot()
  	{
        _.each(this.components, (item) => {
            window.Vue.component(item.tag, item.module)
        });
  	}
}

const instance = new LoadVueGlobalComponents();
instance.boot();

Object.freeze(instance);

export default instance;