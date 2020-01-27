import splitComponent from './Split.vue';

export default {
    name: "SplitPlugin",
    component: splitComponent,
    display: {
        iconPosition: 'left',
        content: 'simple'
    },
    tooltip: "Split",
    keepActive: false,
    icon: {
        svg: {
            path: `
        <?xml version="1.0" encoding="iso-8859-1"?>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g>
            <path d="M437.333,277.333H74.667C68.771,277.333,64,282.104,64,288v181.333C64,492.865,83.135,512,106.667,512h298.667 C428.865,512,448,492.865,448,469.333V288C448,282.104,443.229,277.333,437.333,277.333z M426.667,469.333 c0,11.76-9.573,21.333-21.333,21.333H106.667c-11.76,0-21.333-9.573-21.333-21.333V298.667h341.333V469.333z"/>
            <path d="M444.875,109.792L338.208,3.125c-2-2-4.708-3.125-7.542-3.125h-224C83.135,0,64,19.135,64,42.667V224 c0,5.896,4.771,10.667,10.667,10.667h362.667c5.896,0,10.667-4.771,10.667-10.667V117.333 C448,114.5,446.875,111.792,444.875,109.792z M341.333,36.417l70.25,70.25h-48.917c-11.76,0-21.333-9.573-21.333-21.333V36.417z M426.667,213.333H85.333V42.667c0-11.76,9.573-21.333,21.333-21.333H320v64C320,108.865,339.135,128,362.667,128h64V213.333z"/>
            <path d="M264.531,132.271c-4.021-5.375-13.042-5.375-17.063,0l-32,42.667c-3.542,4.708-2.583,11.396,2.135,14.927 c2.229,0,4.469-0.698,6.385-2.135c4.719-3.531,5.677-10.219,2.135-14.927L264.531,132.271z"/>
            <path d="M247.469,379.729c2.01,2.688,5.177,4.271,8.531,4.271s6.521-1.583,8.531-4.271l32-42.667 c3.542-4.708,2.583-11.396-2.135-14.927c-4.688-3.531-11.385-2.594-14.927,2.135L256,355.552l-23.469-31.281 c-3.542-4.74-10.24-5.688-14.927-2.135c-4.719,3.531-5.677,10.219-2.135,14.927L247.469,379.729z"/>
        </g>
        </svg>`
        },
        options: { x: 512, y: 512 }
    }
};
