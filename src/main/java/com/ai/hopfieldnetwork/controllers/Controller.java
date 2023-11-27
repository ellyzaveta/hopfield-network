package com.ai.hopfieldnetwork.controllers;

import com.ai.hopfieldnetwork.services.HopfieldNetworkService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static com.ai.hopfieldnetwork.utils.StandardLetters.*;

@RestController
@RequestMapping("/hopfield-network")
public class Controller {

    HopfieldNetworkService hopfieldNetworkService = new HopfieldNetworkService();

    public Controller() {
        hopfieldNetworkService.train(letter1);
        hopfieldNetworkService.train(letter2);
        hopfieldNetworkService.train(letter3);
    }

    @PutMapping("/add")
    public void train(@RequestParam List<Integer> letterToTrain) {
        hopfieldNetworkService.train(letterToTrain);
    }

    @GetMapping("/recognize")
    public ResponseEntity<Object> recognize(@RequestParam List<Integer> letterToRecognize) {
        Optional<List<Integer>> result = hopfieldNetworkService.recognize(letterToRecognize);
        return result.<ResponseEntity<Object>>map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("Letter recognition failed or no result found"));
    }

    @GetMapping("/data")
    public List<List<Integer>> getDataset() {
        return hopfieldNetworkService.getDataset();
    }
}
