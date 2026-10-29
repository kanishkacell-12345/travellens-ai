import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() => runApp(const TravelLensApp());

class TravelLensApp extends StatelessWidget {
  const TravelLensApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp(
    title: 'TravelLens AI',
    theme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF176B5B)), useMaterial3: true),
    home: const HomePage(),
  );
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  // Android emulator address. Change for iOS simulator or a physical phone.
  static const apiBaseUrl = 'http://10.0.2.2:8000';
  late Future<List<dynamic>> landmarksFuture;

  @override
  void initState() {
    super.initState();
    landmarksFuture = fetchLandmarks();
  }

  Future<List<dynamic>> fetchLandmarks() async {
    final response = await http.get(Uri.parse('$apiBaseUrl/landmarks'));
    if (response.statusCode != 200) {
      throw Exception('Could not load landmarks (${response.statusCode})');
    }
    final decoded = jsonDecode(response.body) as Map<String, dynamic>;
    return decoded['items'] as List<dynamic>;
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('TravelLens AI')),
    body: ListView(
      padding: const EdgeInsets.all(16),
      children: [
        const Text('Every Landmark Has a Story.', style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold)),
        const SizedBox(height: 8),
        const Text('Explore heritage places and discover their stories. This is an early development version.'),
        const SizedBox(height: 20),
        FilledButton.icon(
          onPressed: () => ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Camera-based AI recognition is not implemented yet.')),
          ),
          icon: const Icon(Icons.camera_alt),
          label: const Text('Recognize a landmark (coming soon)'),
        ),
        const SizedBox(height: 24),
        const Text('Sample landmarks', style: TextStyle(fontSize: 19, fontWeight: FontWeight.w600)),
        const SizedBox(height: 8),
        FutureBuilder<List<dynamic>>(
          future: landmarksFuture,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return const Center(child: Padding(padding: EdgeInsets.all(24), child: CircularProgressIndicator()));
            }
            if (snapshot.hasError) {
              return Card(child: Padding(
                padding: const EdgeInsets.all(16),
                child: Text('Could not connect to the backend. Start the API and check the API URL.\n\n${snapshot.error}'),
              ));
            }
            final items = snapshot.data ?? [];
            if (items.isEmpty) return const Text('No landmarks found.');
            return Column(children: items.map((raw) {
              final item = raw as Map<String, dynamic>;
              return Card(child: ListTile(
                leading: const CircleAvatar(child: Icon(Icons.account_balance)),
                title: Text(item['name']?.toString() ?? 'Unknown landmark'),
                subtitle: Text('${item['city']}, ${item['country']}\n${item['description']}'),
                isThreeLine: true,
              ));
            }).toList());
          },
        ),
      ],
    ),
  );
}
