/*
 * Posts manifest file. All post meta is stored in a JS object here.
 * Extend from:
 * {
 *   'post1-slug': {
 *      slug: 'post1-slug',
 *      title: 'Post 1 Title',
 *      date: 'Month Day, Year' // 'MM-DD-YYYY', whatever format
 *      tags: ['tag1', 'tag2', 'tag3'],
 *      abstract: 'This is the first sentence of my post. This is the second sentence...'
 *   },
 *   'post2-slug': {...}
 * }
 * ....(or hack it to make your own. You must change the PostSummary component accordingly.)
 */

export default {
  'my-first-post': {
    slug: 'my-first-post',
    title: 'My First Post',
    date: 'January 1, 2016',
    tags: ['javascript', 'react'],
    abstract: 'Thundercats vegan veniam, put a bird on it ullamco cold-pressed dolore pitchfork est vinyl af. In you probably haven\'t heard of them dreamcatcher delectus asymmetrical, try-hard esse.'
  },
  'my-second-post': {
    slug: 'my-second-post',
    title: 'My Second Post',
    date: 'January 2, 2016',
    abstract: 'In you probably haven\'t heard of them dreamcatcher delectus asymmetrical, try-hard esse. Thundercats vegan veniam, put a bird on it ullamco cold-pressed dolore pitchfork est vinyl af.'
  },
  'my-third-post': {
    slug: 'my-third-post',
    title: 'My Third Post',
    date: 'January 3, 2016',
    abstract: 'n you probably haven\'t heard of them dreamcatcher delectus asymmetrical, try-hard esse. Thundercats vegan veniam, put a bird on it ullamco cold-pressed dolore pitchfork est vinyl af.'
  }
};
