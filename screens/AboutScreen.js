import React from 'react';
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import aboutStyles from '../styles/aboutStyles';

const AboutScreen = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={aboutStyles.container}>
      <ScrollView contentContainerStyle={aboutStyles.scrollContent}>
        <View style={aboutStyles.content}>
          <Text style={aboutStyles.title}>About</Text>
          <Text style={aboutStyles.description}>
            This app is dedicated to anime books, including manga. Discover a wide range of anime books, explore popular titles, and stay up to date with the latest releases. Dive into the captivating world of anime and manga with our app!
          </Text>

          <View style={aboutStyles.tableContainer}>
            <View style={aboutStyles.tableRow}>
              <View style={aboutStyles.contactIcons}>
                <TouchableOpacity onPress={() => handleLinkPress('https://github.com/ddatunashvili')}>
                  <Image source={require('../assets/github.png')} style={aboutStyles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('https://www.youtube.com/@ddatunashvili')}>
                  <Image source={require('../assets/youtube.png')} style={aboutStyles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('https://www.instagram.com/ddatunashvilii')}>
                  <Image source={require('../assets/instagram.png')} style={aboutStyles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('https://discord.gg/HS79QcruX7')}>
                  <Image source={require('../assets/discord.png')} style={aboutStyles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={aboutStyles.projectContainer}>
            <Text style={aboutStyles.projectTitle}>My Projects</Text>
            <TouchableOpacity onPress={() => handleLinkPress('https://project1link.com')}>
              <View style={aboutStyles.projectCard}>
                <Image source={require('../assets/python.png')} style={aboutStyles.projectImage} />
                <Text style={aboutStyles.projectName}>Project 1</Text>
                <Text style={aboutStyles.projectDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada auctor neque, at venenatis magna fermentum nec.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleLinkPress('https://project2link.com')}>
              <View style={aboutStyles.projectCard}>
                <Image source={require('../assets/js.png')} style={aboutStyles.projectImage} />
                <Text style={aboutStyles.projectName}>Project 2</Text>
                <Text style={aboutStyles.projectDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada auctor neque, at venenatis magna fermentum nec.</Text>
              </View>
            </TouchableOpacity>

         
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;
