import { AppleMaps, GoogleMaps } from 'expo-maps';
import { StatusBar } from 'expo-status-bar';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';

type Marker = {
	coordinates: {
		latitude: number;
		longitude: number;
	};
	systemImage: string;
	tintColor: string;
	title: string;
};

const MARKER_DATA: Marker[] = [
	{
		coordinates: {
			latitude: 44.608543,
			longitude: -1.094672,
		},
		systemImage: 'mappin.circle.fill',
		tintColor: 'blue',
		title: 'Plage des Arbousiers',
	},
	{
		coordinates: {
			latitude: 44.604215,
			longitude: -1.091453,
		},
		systemImage: 'fork.knife.circle.fill',
		tintColor: 'orange',
		title: 'Café du Port',
	},
];

export default function App() {
	return (
		<View style={styles.container}>
			{Platform.OS === 'ios' ? (
				<AppleMaps.View
					style={{ flex: 1 }}
					cameraPosition={{
						coordinates: {
							latitude: 44.60414166575967,
							longitude: -1.091734245661981,
						},
						zoom: 14.5,
					}}
					markers={MARKER_DATA.map((marker: Marker) => ({
						coordinates: marker.coordinates,
						systemImage: marker.systemImage,
						tintColor: marker.tintColor,
						title: marker.title,
					}))}
					onMarkerClick={(marker) => {
						console.log('marker', marker);
						Alert.alert('Marker clicked', marker.title);
					}}
				/>
			) : (
				<GoogleMaps.View style={{ flex: 1 }} />
			)}
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
