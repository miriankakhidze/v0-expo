import { router, useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { emails } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

interface EmailDetailScreenProps {}

export default function EmailDetailScreen({}: // email,
// onBack,
EmailDetailScreenProps) {
  const { emailId } = useLocalSearchParams();
  const email = emails.find((email) => email.id === emailId);

  if (!email) {
    return (
      <View style={styles.container}>
        <Text>No email selected</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>⭐</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.emailHeader}>
          <Text style={styles.subject}>{email.subject}</Text>

          <View style={styles.senderInfo}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>{email.avatar}</Text>
            </View>
            <View style={styles.senderDetails}>
              <Text style={styles.senderName}>{email.sender}</Text>
              <Text style={styles.senderEmail}>{email.senderEmail}</Text>
              <Text style={styles.timestamp}>{email.timestamp}</Text>
            </View>
          </View>
        </View>

        <View style={styles.emailBody}>
          <Text style={styles.bodyText}>{email.body}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.replyButton}>
            <Text style={styles.replyButtonText}>Reply</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forwardButton}>
            <Text style={styles.forwardButtonText}>Forward</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "500",
  },
  headerActions: {
    flexDirection: "row",
    gap: 16,
  },
  actionButton: {
    padding: 8,
  },
  actionButtonText: {
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
  emailHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  subject: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    lineHeight: 26,
  },
  senderInfo: {
    flexDirection: "row",
    alignItems: "center",
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
  senderDetails: {
    flex: 1,
  },
  senderName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  senderEmail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
  },
  emailBody: {
    padding: 20,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  actions: {
    flexDirection: "row",
    padding: 20,
    gap: 12,
  },
  replyButton: {
    flex: 1,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  replyButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  forwardButton: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  forwardButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },
});
