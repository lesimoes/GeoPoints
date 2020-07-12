import useSwr from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const useClustersWithBounds = ({
	zoom,
	bounds
}) => {


	const url = `${process.env.REACT_APP_API_HOST}/api/clusters/bounds?zoom=${zoom}
      &nwLng=${bounds.nw.lng}
      &seLat=${bounds.se.lat}
      &seLng=${bounds.se.lng}
      &nwLat=${bounds.nw.lat}`;
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const {
		data,
		error
	} = useSwr(url, fetcher)
	const markers = data && !error ? data : [];
	return markers;
}

export default useClustersWithBounds;
