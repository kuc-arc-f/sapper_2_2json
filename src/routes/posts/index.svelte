<script context="module">
export function preload() {
	var url ="/api/posts/list";
    return this.fetch(url).then(r => r.json()).then(data => {
    var posts = data
//console.log(key)
    return { posts };
  });
}
</script>

<script>
	export let posts;
//console.log(posts)
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Posts</title>
</svelte:head>
<h1>postsIndex</h1>
<hr />
<ul>
	{#each posts as post}
		<li><a rel="prefetch" href="posts/{post.save_id}">{post.title}</a></li>
	{/each}
</ul>
