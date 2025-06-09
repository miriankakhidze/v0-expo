import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { Email } from "../types";
import { emails } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

interface InboxScreenProps {}

export default function InboxScreen({}: InboxScreenProps) {
  const renderEmailItem = ({ item }: { item: Email }) => (
    <TouchableOpacity
      style={[styles.emailItem, !item.isRead && styles.unreadEmail]}
      onPress={() =>
        router.push({
          pathname: "/email-detail/[emailId]",
          params: {
            emailId: item.id,
          },
        })
      }
    >
      <View style={styles.emailHeader}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{item.avatar}</Text>
        </View>
        <View style={styles.emailInfo}>
          <View style={styles.emailTopRow}>
            <Text
              style={[styles.senderName, !item.isRead && styles.unreadText]}
            >
              {item.sender}
            </Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
          <Text
            style={[styles.subject, !item.isRead && styles.unreadText]}
            numberOfLines={1}
          >
            {item.subject}
          </Text>
          <Text style={styles.preview} numberOfLines={2}>
            {item.preview}
          </Text>
        </View>
        {item.isStarred && (
          <View style={styles.starContainer}>
            <Text style={styles.star}>⭐</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
        <TouchableOpacity
          style={styles.composeButton}
          onPress={() => router.push("/compose")}
        >
          <Text style={styles.composeButtonText}>✏️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search emails..."
          placeholderTextColor="#999"
        />
      </View>

      <FlatList
        data={emails}
        renderItem={renderEmailItem}
        keyExtractor={(item) => item.id}
        style={styles.emailList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  composeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  composeButtonText: {
    fontSize: 20,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  emailList: {
    flex: 1,
  },
  emailItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  unreadEmail: {
    backgroundColor: "#f8f9ff",
  },
  emailHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  emailInfo: {
    flex: 1,
  },
  emailTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  senderName: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  unreadText: {
    fontWeight: "bold",
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
  },
  subject: {
    fontSize: 15,
    color: "#333",
    marginBottom: 4,
  },
  preview: {
    fontSize: 14,
    color: "#666",
    lineHeight: 18,
  },
  starContainer: {
    marginLeft: 8,
  },
  star: {
    fontSize: 16,
  },
});
