import Queue from 'bull';
import redisCOnfig from '../config/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisCOnfig),
  name: job.key,
  handle: job.handle,
}));

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find(queue => queue.name);

    return queue.bull.add(data);
  },
  process() {
    return queue.bull.forEach(queue => {
      queue.bull.on('failed', (job, err) => {
        console.log('Job failed', queue.key, job.data);
        console.log(err);
      });
    });
  }
};