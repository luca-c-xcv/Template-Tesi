void destroy_queue( queue_t *q )
{
	if( q != NULL )
	{
		clear_queue( q );

		pthread_mutex_lock( &q->queue_lock );
			if( q->head->ptr != NULL )
				free( q->head->ptr );
			free( q->head );
		pthread_mutex_unlock( &q->queue_lock );

		free( q );
	}
}
