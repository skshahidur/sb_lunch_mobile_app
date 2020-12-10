import { IonContent, IonGrid, IonPage, IonImg, IonRow } from "@ionic/react";
import React from "react";
import "./SplashScreen.css";

const SplashScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="Absolute-Center">
            <IonImg
              src={require("../../assets/images/logo.png")}
              class="Absolute-Center img"
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
