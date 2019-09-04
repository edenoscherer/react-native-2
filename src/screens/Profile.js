import React from "react";
import { View, Image, Text, ActivityIndicator } from "react-native";
import moment from "moment";

import Header from "../components/Header";
import Styles from "./styles";
import { COLORS } from "../constants/styles";

export default class Profile extends React.PureComponent {
  state = {
    isLoading: true
  };

  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 600);
  }

  profile = {
    email: "rafaelfuzifaru@gmail.com",
    picture:
      "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm",
    first_name: "Rafael",
    last_name: "Fuzifaru Cianci",
    phone: "(48) 99120-3585",
    gender: 1,
    birthday: "1993-04-27T00:00:00-03:00",
    linkedin: "https://www.linkedin.com/in/rafaelcianci",
    github: "http://github.com/rafacianci",
    address: {
      Street: "",
      ZipCode: "",
      Number: "",
      ComplementaryAddress: ""
    },
    language: ["Português - PT", "Inglês - EN", "Japonês - JA"],
    name: "Rafael Fuzifaru Cianci"
  };

  activityIndicator() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color={COLORS.PRIMARY} />;
    }
    return null;
  }

  render() {
    return (
      <View style={Styles.container}>
        <Header />
        <View style={Styles.containerUser}>
          <View style={Styles.containerName}>
            <Image
              style={Styles.profilePicture}
              className="profile-image"
              source={{ uri: this.profile.picture }}
            />
            <Text style={Styles.profileName} className="profile-name">
              {this.profile.name}
            </Text>
          </View>
          {this.activityIndicator()}
          <View
            className="contact-content"
            style={{ opacity: this.state.isLoading ? 0 : 1 }}
          >
            <View style={Styles.containerLinks}>
              <Text style={Styles.textTitle} className="contact-label">
                Linkedin:
              </Text>
              <Text style={Styles.textValue} className="contact-value">
                {this.profile.linkedin}
              </Text>
              <View style={Styles.margin}></View>
              <Text style={Styles.textTitle} className="contact-label">
                Github:
              </Text>
              <Text style={Styles.textValue} className="contact-value">
                {this.profile.github}
              </Text>
            </View>
            <View style={Styles.containerInfo}>
              <Text style={Styles.textTitle} className="contact-label">
                E-mail:
              </Text>
              <Text style={Styles.textValue} className="contact-value">
                {this.profile.email}
              </Text>
              <View style={Styles.margin}></View>
              <Text style={Styles.textTitle} className="contact-label">
                Celular:
              </Text>
              <Text style={Styles.textValue} className="contact-value">
                {this.profile.phone}
              </Text>
              <View style={Styles.margin}></View>
              <Text style={Styles.textTitle} className="contact-label">
                Data de Nascimento:
              </Text>
              <Text style={Styles.textValue} className="contact-value">
                {moment(this.profile.birthday).format("DD/MM/YYYY")}
              </Text>
              <View style={Styles.margin}></View>
              <Text style={Styles.textTitle} className="contact-label">
                Sexo:
              </Text>
              <Text style={Styles.textValue} className="contact-value">
                Masculino
              </Text>
              <View style={Styles.margin}></View>
              <Text style={Styles.textTitle} className="contact-label">
                Idiomas:
              </Text>
              <View style={Styles.containerLabels}>
                {this.profile.language.map(language => (
                  <Text
                    key={language}
                    style={Styles.label}
                    className="contact-language"
                  >
                    {language}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
