interface MapMarker {
  location: {
    lat: number;
    lng: number;
  };

  contentMarker(): string
}
export class CustomMap {
  private readonly googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  getMarker(mappable: MapMarker): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    const info = new google.maps.InfoWindow({
      content:mappable.contentMarker()
    });

    marker.addListener("click", () => {
      info.open(this.googleMap, marker);
    });
  }
}
