<script context="module">
import Nav from '../../components/Nav.svelte';
import IndexRow from './IndexRow.svelte';
//export let segment;
export async function preload() {
  const res = await this.fetch(`posts.json`);
	const data = await res.json();
  var index_posts =data
//console.log(index_posts)
  return { index_posts };
}
</script>

<script>
	export let index_posts;
//console.log(index_posts)
</script>

<style>
.body_wrap{ position:relative; }
.page_post{
	position:absolute; top:-15px; left:10px;  border: 2px solid var(--bs-orange); 
}
.badge_post{
	position:absolute; top:-15px; left:10px; 
}    
</style>

<svelte:head>
	<title>Posts</title>
</svelte:head>
<Nav />
<div class="body_main_wrap">
  <div class="container">
    <!--
    <div class="row">
      <div class="col-md-12">
        <div class="btn_disp_ara_wrap mt-0">
          <div class="card shadow-sm my-2">
            <h5 class="card-header myblog_color_accent">Pages</h5>
            <div class="card-body">                  
              <div class="page_btn_wrap">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    -->
    <div class="body_wrap card shadow-sm my-4">
      <span class="badge_post badge pt-2 pb-1 rounded myblog_bgcolor_accent px-3">
        <h5>Posts</h5>
      </span>    
      <div id="post_items_box" class="card-body mt-2 mb-4">
        <div id="div_news">
        </div>
        <div class="posts_items_row my-3">
          {#each index_posts as item}
          <IndexRow id={item.id} save_id={item.save_id} title={item.title} 
          date={item.created_at}  />
          {/each}          
        </div>
      </div>
    </div>
  </div>
  
</div>
